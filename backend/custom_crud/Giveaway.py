from sqlalchemy.orm import Session
from sqlalchemy import func
from configs.crud import CRUDBase
from models.Giveaway import Giveaway


class GiveawayCrud(CRUDBase):
    def __init__(self):
        # Pass giveaway model to CRUDBase
        super().__init__(Giveaway)

    def get_active(self, db: Session):
        return db.query(self.model).filter(self.model.is_active == True).all()

    def total_giveaways(self, db: Session):
        return db.query(self.model).filter(self.model.winners.isnot(None)).count()

    def total_winners(self, db: Session):
        total = db.query(func.sum(self.model.total_winners)).filter(self.model.winners.isnot(None)).scalar()
        return total or 0