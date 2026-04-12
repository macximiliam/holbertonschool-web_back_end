#!/usr/bin/env python3
""" Modulo para insertar un nuevo documento en una coleccion """


def insert_school(mongo_collection, **kwargs):
    """
    Inserta un nuevo documento en una coleccion basado en kwargs
    """
    new_document = mongo_collection.insert_one(kwargs)
    return new_document.inserted_id
