export type MessageType = {
    id: string,
    from: { name: string },
    // type: 'response' | 'message' | 'typing', 
    // выдает ошибку Type 'string' is not assignable to type '"response" | "message" | "typing"'
    //прописать значение через утверждение типа в массиве messages нет возможности
    type: string,
    time: string,
    text?: string,
}