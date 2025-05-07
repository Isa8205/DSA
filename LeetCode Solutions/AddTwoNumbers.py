# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: Optional[ListNode]
        :type l2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """

        def get_number(list):
            curr = list
            number = ''

            while (curr):
                number += str(curr.val)
                curr = curr.next

            return int(number[::-1])
        
        num1 = get_number(l1)
        num2 = get_number(l2)
        ans = num1 + num2
        ans_list = [int(n) for n in str(ans)]

        head = ListNode()
        head.val = ans_list.pop()

        if len(ans_list) == 0:
            return head

        node = ListNode()
        node.val = ans_list.pop()
        head.next = node

        while len(ans_list) >= 1:
            curr_node = ListNode()
            curr_node.val = ans_list.pop()
            node.next = curr_node
            node = node.next



        return head