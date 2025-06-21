// Problem Statement: Implement a stack using an array.
package main

import "fmt"

type Stack[T any] struct {
	elements []T
	top	  int
	capacity int
}

func NewStack[T any](capacity int) *Stack[T] {
	return &Stack[T]{
		elements: make([]T, capacity),
		top:      -1,
		capacity: capacity,
	}
}

func (s *Stack[T]) Push(value T) {
	if s.top >= s.capacity-1 {
		fmt.Println("Stack overflow")
		return
	}

	s.top += 1
	s.elements[s.top] = value
	fmt.Println("Pushed:", value)
}

func (s *Stack[T]) Pop() (T, bool) {
	if s.top < 0 {
		fmt.Println("Stack underflow")
		var zeroValue T
		return zeroValue, false
	}

	value := s.elements[s.top]
	s.top -= 1
	return value, true
}

func (s *Stack[T]) Peek() (T, bool) {
	if s.top < 0 {
		fmt.Println("Stack is empty")
		var zeroValue T
		return zeroValue, false
	}

	return s.elements[s.top], true
}

func (s *Stack[T]) IsEmpty() bool {
	return s.top < 0
}

func (s *Stack[T]) Size() int {
	return s.top + 1
}

func (s *Stack[T]) IsFull() bool {
	return s.top >= s.capacity-1
}

func (s *Stack[T]) Print() {
	if s.IsEmpty() {
		fmt.Println("Stack is empty")
		return
	}

	fmt.Print("Stack elements: ")
	for i := 0; i <= s.top; i++ {
		fmt.Print(s.elements[i], " ")
	}
	fmt.Println()
}

func main() {
	stack := NewStack[int](5)

	stack.Push(10)
	stack.Push(20)
	stack.Push(30)
	stack.Print()

	value, _ := stack.Pop()
	fmt.Println("Popped:", value)
	stack.Print()

	peekValue, _ := stack.Peek()
	fmt.Println("Peeked:", peekValue)

	fmt.Println("Is stack empty?", stack.IsEmpty())
	fmt.Println("Stack size:", stack.Size())
	fmt.Println("Is stack full?", stack.IsFull())

	stack.Push(40)
	stack.Push(50)
	stack.Push(60) // This will show "Stack overflow"
	stack.Print()
}

// Output:
// Pushed: 10
// Pushed: 20
// Pushed: 30
// Stack elements: 10 20 30 
// Popped: 30
// Stack elements: 10 20 
// Peeked: 20
// Is stack empty? false
// Stack size: 2
// Is stack full? false
// Pushed: 40
// Pushed: 50
// Pushed: 60
// Stack elements: 10 20 40 50 60 