function recursiveRange(nums, index=0){
    if(index === nums.length) return

    return nums[index] + recursiveRange(nums, index+1)
}