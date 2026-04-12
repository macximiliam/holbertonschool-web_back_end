#!/usr/bin/env python3
"""
Module for filtering schools by a specific topic
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of school having a specific topic
    """
    cursor = mongo_collection.find({"topics": topic})
    return [school for school in cursor]
