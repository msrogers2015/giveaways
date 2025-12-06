from sqlalchemy import Column, BigInteger, String, Boolean
from .BaseModel import BaseModel

class Entry(BaseModel):
    __tablename__ = "entries"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    giveaway_id = Column(BigInteger, nullable=False)
    email = Column(String(50), nullable=False)
    winner = Column(Boolean, nullable=False)
    state = Column(String(2), nullable=False)
    first_name = Column(String(50), nullable=False)