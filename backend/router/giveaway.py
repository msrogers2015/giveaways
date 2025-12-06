from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from configs.database import get_db
from models.Giveaway import Giveaway
from custom_crud.Giveaway import GiveawayCrud
from custom_crud.Entry import EntryCrud
from schemas.Giveaway import GiveawaySchema
from typing import List

giveaways = APIRouter()
giveaway = GiveawayCrud()
entry = EntryCrud()

@giveaways.get('/all', response_model=List[GiveawaySchema])
async def all_giveaways(db: Session = Depends(get_db)):
    return giveaway.get_all(db)

@giveaways.get('/id/{g_id}', response_model=GiveawaySchema)
async def giveaway_by_id(g_id: int, db: Session = Depends(get_db)):
    result = giveaway.get_by_id(id=g_id, db=db)
    if not result:
        raise HTTPException(status_code=404, detail='No giveaway found.')
    return result

@giveaways.get('/active', response_model=List[GiveawaySchema])
async def active_giveaways(db: Session = Depends(get_db)):
    results = giveaway.get_active(db=db)
    if not results:
        raise HTTPException(status_code=404, detail='There are no active giveaways.')
    return results

@giveaways.post('/entry/{g_id}')
async def enter_giveaway(g_id: int, email: str, state: str, db: Session = Depends(get_db)):
    results = entry.get_filtered(db=db, filters={'giveaway_id': g_id, 'email': email})
    if results:
        raise HTTPException(status_code=400, detail='You are already entered into this giveaway.')
    entry.create_record(db=db, data={'giveaway_id': g_id, 'email': email, 'state': state, "winner": False})

@giveaways.get('/metrics')
async def giveaway_metrics(db: Session = Depends(get_db)):
    completed = giveaway.total_giveaways(db=db)
    winners = giveaway.total_winners(db=db)
    return {"completed_giveaways": completed, "total_winners": winners}