export function fetchComments(data) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ comment: data }), 500)
  );
}
