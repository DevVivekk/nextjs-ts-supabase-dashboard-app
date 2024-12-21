'use server';
interface Student{
  studentName: string;
  cohort: string;
  courses: string[];
  status: boolean;
  id?:string;
}
interface ApiHitProps{
    url:string,
    id?:string;
    method:string,
    body?:Student | null
}
export const hitApi = async (data: ApiHitProps) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.BASE_URL || 'http://localhost:3000'; // Base URL
    let url = `${baseUrl}${data.url}`; 
    if (data.id) {
      url = `${url}?id=${data.id}`;
    }
  
    const res = await fetch(url, {
      method: data.method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: data.body ? JSON.stringify(data.body) : null, //ternary codition to check if body present or not
    });
  
    return res.status;
  };
  