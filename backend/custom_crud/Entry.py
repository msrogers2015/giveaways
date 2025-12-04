from sqlalchemy.orm import Session
from configs.crud import CRUDBase
from models.Entry import Entry


class EntryCrud(CRUDBase):
    def __init__(self):
        # Pass entry model to CRUDBase
        super().__init__(Entry)
