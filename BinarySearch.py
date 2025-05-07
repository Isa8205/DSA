import time

class BinarySearch:
    def __init__(self, nums):
        self.origina_nums = nums
        self.target = None

    def set_target(self, target):
        self.target = target

    def search(self, nums=None, offset=0) -> int:
        if nums is None:
            nums = self.origina_nums

        nums_len = len(nums)
        mid = (nums_len - 1) // 2
        curr_number = nums[mid]

        if curr_number == self.target:
            result = mid + offset
            return result
        elif curr_number < self.target:
            offset = offset + mid + 1
            curr_nums = nums[mid + 1:]
            return self.search(curr_nums, offset=offset)
        else:
            curr_nums = nums[:mid + 1]
            return self.search(curr_nums, offset)

# start_loop = time.time()
# for num in list(range(50000000)):
#     if num == 45000000:
#         break
# stop_loop = time.time()
# print(f"{num} was found in {stop_loop - start_loop:.5f}sec")

binary_search = BinarySearch(nums=list(range(1000000)))
binary_search.set_target(50000)

start_binary = time.time()
ans = binary_search.search()
end_binary = time.time()

print(f"{ans} was found in {end_binary - start_binary:.5f} sec")