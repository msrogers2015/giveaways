from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from configs.database import get_db
from models.Giveaway import Giveaway
from custom_crud.Giveaway import GiveawayCrud
from custom_crud.Entry import EntryCrud
from schemas.Giveaway import GiveawayDetailsSchema, GiveawaySchema
from typing import List

giveaways = APIRouter()
giveaway = GiveawayCrud()
entry = EntryCrud()


@giveaways.get('/id/{g_id}', response_model=GiveawayDetailsSchema)
async def giveaway_by_id(g_id: int, db: Session = Depends(get_db)):
    result = giveaway.get_by_id(id=g_id, db=db)
    if not result:
        raise HTTPException(status_code=404, detail='No giveaway found.')

    return {
        'giveaway': result,
        "count": len(giveaway.get_active(db=db)),
        "entries": entry.total_entries(db=db, g_id=g_id)
    }

@giveaways.get('/active', response_model=List[GiveawaySchema])
async def active_giveaways(db: Session = Depends(get_db)):
    results = giveaway.get_active(db=db)
    if not results:
        raise HTTPException(status_code=404, detail='There are no active giveaways.')
    return results

@giveaways.post('/entry/{g_id}')
async def enter_giveaway(g_id: int, email: str, first_name: str, state: str, db: Session = Depends(get_db)):
    results = entry.get_filtered(db=db, filters={'giveaway_id': g_id, 'email': email})
    if results:
        raise HTTPException(status_code=400, detail='You are already entered into this giveaway.')
    entry.create_record(db=db, data={'giveaway_id': g_id, 'email': email, 'state': state, "winner": False, "first_name": first_name})

@giveaways.get('/metrics')
async def giveaway_metrics(db: Session = Depends(get_db)):
    completed = giveaway.total_giveaways(db=db)
    winners = giveaway.total_winners(db=db)
    return {"completed_giveaways": completed, "total_winners": winners}

@giveaways.get('/entries/{g_id}')
async def total_entries(g_id: int, db: Session = Depends(get_db)):
    return entry.total_entries(db=db, g_id=g_id)