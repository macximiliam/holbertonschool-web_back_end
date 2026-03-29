import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Asynchronous coroutine that waits for a random delay
    between 0 and max_delay seconds and returns the delay.
    """
    # Generate a random float between 0 and max_delay
    delay = random.uniform(0, max_delay)

    # Pause execution for the duration of the delay
    await asyncio.sleep(delay)

    return delay
