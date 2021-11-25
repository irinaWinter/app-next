import { Button, Htag, P, Tag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст 1</Htag>
      <Htag tag="h2">Текст 2</Htag>
      <Htag tag="h3">Текст 3</Htag>
      <Button appearance="primary" arrow="down">Кнопка</Button>
      <Button appearance="ghost" arrow="right">Кнопка</Button>
      <P size="s">Текст small</P>
      <P>Текст medium</P>
      <P size="l">Текст large</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">Red</Tag>
      <Tag size="s" color="green">Green</Tag>
      <Tag color="primary">Primary</Tag>
    </>
  )
}
