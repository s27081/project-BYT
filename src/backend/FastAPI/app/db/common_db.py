from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

#Templatki tabel z bazy

Base = declarative_base()

class SampleTable(Base):
    __tablename__ = "sampleTable"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)

class SampleTable1(Base):
    __tablename__ = "sampleTable1"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    age = Column(Integer, index=True)

#Mapowanie nazw do obiektów - dynamiczne wybieranie tabelii
TABLE_MAP = {
    "sampleTable": SampleTable,
    "sampleTable1": SampleTable1
}
