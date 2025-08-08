from typing import List

def dfs(graph: List[List[int]]) -> List[int]:
    n = len(graph)
    visited = [False]*n 
    stack = [0]
    result = []

    while stack:
        curr = stack.pop()
        if not visited[curr]:
            for adj in graph[curr]:
                if not visited[adj]:
                    stack.append(adj)
            visited[curr] = True
            result.append(curr)
    
    return result

graph = [[1,2], [0,2,3], [0,4], [1,4], [2,3]]
result = dfs(graph)
print(result)