def detectCycleBFS(graph):
    n = len(graph)
    visited = [False] * n

    for start in range(n):
        if not visited[start]:
            queue = [(start, -1)]
            visited[start] = True

            while queue:
                node, parent = queue.pop(0)
                for neighbor in graph[node]:
                    if not visited[neighbor]:
                        visited[neighbor] = True
                        queue.append((neighbor, node))
                    elif neighbor != parent:
                        return True
                    
    return False

graph = [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]]
result = detectCycleBFS(graph)
print("Found cycle: ", result)