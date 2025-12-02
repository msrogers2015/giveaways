from sqlalchemy import Column, BigInteger, String, Integer, DateTime, Boolean
from .BaseModel import BaseModel


class Giveaway(BaseModel):
    __tablename__ = "giveaways"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    subject = Column(String(20), nullable=False)
    total_winners = Column(Integer, nullable=False)
    end_date = Column(DateTime(timezone=True), nullable=False)
    is_active = Column(Boolean, nullable=False)
    created_at = Column(DateTime(timezone=True), nullable=False)
    redeem_link = Column(String(150), nullable=True)
    redeem_platform = Column(String(50), nullable=True)