from typing import List

def bfs(graph: List[List[int]]) -> List[int]:
    n = len(graph)
    visited = [False]*n 
    queue = [0] # Start with Node 0
    visited[0] = True

    result = []

    while queue:
        curr = queue.pop(0)
        for adj_node in graph[curr]:
            if not visited[adj_node]:
                queue.append(adj_node)
                visited[adj_node] = True
        result.append(curr)
    
    return result

graph = [[1,2], [0,2,3], [0,4], [1,4], [2,3]]
result = bfs(graph)
print(result)