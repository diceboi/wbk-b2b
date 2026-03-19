import ClientPage from '../../components/ClientPage';
import { getDictionary } from '../../dictionaries';

export default async function Home(props) {
  const params = await props.params;
  const lang = params.lang;
  const dict = await getDictionary(lang);
  return (
    <ClientPage baseDict={dict} lang={lang} />
  );
}
