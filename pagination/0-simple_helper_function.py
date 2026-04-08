def index_range(page: int, page_size: int) -> tuple:
    """
    Calculate the start and end index for pagination parameters.
    
    Args:
        page (int): The page number (1-indexed).
        page_size (int): The number of items per page.
        
    Returns:
        tuple: A tuple containing the (start_index, end_index).
    """
    # Calculate the starting position (offset)
    start_index = (page - 1) * page_size
    
    # Calculate the ending position
    end_index = page * page_size
    
    return (start_index, end_index)
