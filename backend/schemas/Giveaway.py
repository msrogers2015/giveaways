from pydantic import BaseModel
from datetime import date
from typing import List, Dict, Any, Optional

class GiveawaySchema(BaseModel):
    id: int
    name: str
    subject: str
    total_winners: int
    end_date: date
    details: List[Dict[str, Any]]
    mrsp: int
    winners: Optional[List[Dict[str, Any]]] = None