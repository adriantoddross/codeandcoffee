
## Find the duplicated node and delete it from the linked list.

**Ready to dive in?** Navigate to the [index.js](https://replit.com/@BiancaGandolfo/delete-dupe-node#index.js) file and get started.

**Need some direction?** Read on below or ask questions in the #halp channel!


### General questions to consider:

1. What is a Linked List?
1. How can you represent a Linked List in JavaScript?

```
/*
 * Definition for singly-linked list.
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
```

Does the class definition mean nothing to you? Get familiar and practice on [LeetCode](https://leetcode.com/explore/learn/card/linked-list/)

### Specific questions for this problem:

1. Is the linked list sorted? Assume it's unsorted.
1. Is there more than one duplicate? For this case, it can have multiple duplicates. Consider the case where there is only duplicates. What difference does that make?
