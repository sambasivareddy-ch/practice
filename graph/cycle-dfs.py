def detectCycle(graph) ->  bool:
    n = len(graph)
    visited = [False]*n 

    def hasCycle(node, parent):
        visited[node] = True 
        for adj in graph[node]:
            if not visited[adj]:
                if hasCycle(adj, node):
                    return True
            elif adj != parent:
                return True
        return False
                
    for start in range(n):
        if not visited[start]:
            if hasCycle(start, -1):
                return True
    
    return False

graph = [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]]
result = detectCycle(graph)
print("Found cycle: ", result)