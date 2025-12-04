from sqlalchemy.orm import Session
from configs.crud import CRUDBase
from models.Giveaway import Giveaway


class GiveawayCrud(CRUDBase):
    def __init__(self):
        # Pass giveaway model to CRUDBase
        super().__init__(Giveaway)

    def get_active(self, db: Session):
        return db.query(self.model).filter(self.model.is_active == True).all()