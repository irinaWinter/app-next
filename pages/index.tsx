import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст 1</Htag>
      <Htag tag="h2">Текст 2</Htag>
      <Htag tag="h3">Текст 3</Htag>
      <Button appearance="primary" arrow="down">Кнопка</Button>
      <Button appearance="ghost" arrow="right">Кнопка</Button>
    </>
  )
}
