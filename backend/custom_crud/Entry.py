from sqlalchemy.orm import Session
from configs.crud import CRUDBase
from models.Entry import Entry


class EntryCrud(CRUDBase):
    def __init__(self):
        # Pass entry model to CRUDBase
        super().__init__(Entry)

    def total_entries(self, db: Session, g_id: int):
        total = db.query(self.model).filter(self.model.giveaway_id == g_id).count()
        return total or 0