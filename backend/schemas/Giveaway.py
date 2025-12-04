from pydantic import BaseModel
from datetime import datetime

class GiveawaySchema(BaseModel):
    id: int
    name: str
    subject: str
    total_winners: int
    end_date: datetime
