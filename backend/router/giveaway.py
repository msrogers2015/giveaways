from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from configs.database import get_db
from models.Giveaway import Giveaway

giveaway = APIRouter()

@giveaway.get('/all')
async def all_giveaways(db: Session = Depends(get_db)):
    return db.query(Giveaway).all()