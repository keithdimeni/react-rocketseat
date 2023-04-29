import { Post } from "./Post"

export function App() {
  return (
      <div>
          <h1>hello world!</h1>
          <Post
              author="Keith Dimeni"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero accusantium explicabo enim quam placeat eum nobis, ut necessitatibus tempore sit laborum doloremque sequi exercitationem dolor eaque odio quod facilis ratione."
          />
          <Post 
            author="Maurício Biengo" 
            content="O que é um ERP? Conheça a Neducare, uma plataforma de gestão escola."
          />
      </div>
  );
}