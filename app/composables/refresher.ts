type RefreshFn = () => Promise<any>


/**
 * A throttled refreshed function.
 *
 * @param refresh - The function to call to refresh data.
 * @param throttle - The minimum time (in milliseconds) between refreshes.
 */
export const useRefresher = (refresh: RefreshFn, throttle = 500) => {
  const pending = ref(false)

  async function _refresh() {

    pending.value = true
    
    const now = Date.now()

    await refresh()

    // If the refresh took less than the throttle time, wait the remaining time
    const elapsed = Date.now() - now
    const remaining = throttle - elapsed

    await new Promise((resolve) => setTimeout(resolve, remaining))

    pending.value = false
  }

  return { pending, refresh: _refresh }
}
