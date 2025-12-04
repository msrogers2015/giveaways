from sqlalchemy.orm import Session
from fastapi import HTTPException
from typing import Type, TypeVar, Generic, List, Optional, Any, Dict

ModelType = TypeVar("ModelType")

class CRUDBase(Generic[ModelType]):
    def __init__(self, model: Type[ModelType]):
        self.model = model

    def get_all(self, db: Session):
        return db.query(self.model).all()

    def get_by_id(self, db: Session, id: int):
        return db.query(self.model).filter(self.model.id == id).first()

    def create_record(self, db: Session, data: dict, commit: bool = True, return_id: bool = False):
        db_obj = self.model(**data)
        db.add(db_obj)
        if commit:
            db.commit()
        if return_id:
            db.refresh(db_obj)
            return db_obj
        return True

    def get_filtered(self, db: Session, filters):
        return db.query(self.model).filter_by(**filters).all()