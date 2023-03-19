export const fetcher = async ({
 url,
 method,
 body,
 isJSONRequired = true
}) => {
 const response = await fetch(url, {
  method,
  ...(body && { body: JSON.stringify(body) }),
  headers: {
   Accept: "application/json",
   "Content-Type": "application/json",
  }
 });

 if (!response.ok) {
  throw new Error('API Error')
 };

 if (isJSONRequired) {
  const data = await response.json();
  return data.data;
 }
}

export const register = async (user) => {
 return fetcher({
  url: "/api/register",
  method: "POST",
  body: user,
  isJSONRequired: false,
 });
};

export const signin = async (user) => {
 return fetcher({
  url: "/api/signin",
  method: "POST",
  body: user,
  isJSONRequired: false,
 });
};

export const createNewProject = (name: string) => {
 return fetcher({
  url: "/api/project",
  method: "POST",
  body: { name },
  isJSONRequired: true
 });
};
