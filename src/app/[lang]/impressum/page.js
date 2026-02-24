import { getDictionary } from '../../../dictionaries';

export default async function ImpressumPage({ params: { lang } }) {
    const dict = await getDictionary(lang);
    const impressum = dict.legal.impressum;

    return (
        <div className="section section-bg" style={{ minHeight: '80vh' }}>
            <div className="legal-page" style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '60px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <h1 className="section-title" style={{ marginBottom: '40px' }}>{impressum.title}</h1>

                <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '30px', marginBottom: '16px' }}>{impressum.company_name}</h2>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '8px' }}>{impressum.registered_office}</p>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '24px' }}>{impressum.company_number}</p>

                <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '30px', marginBottom: '16px' }}>{impressum.contact}</h2>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '8px' }}>{impressum.email}</p>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '24px' }}>{impressum.phone}</p>

                <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '30px', marginBottom: '16px' }}>{impressum.represented_by}</h2>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '24px' }}>{impressum.director}</p>

                <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '30px', marginBottom: '16px' }}>{impressum.vat}</h2>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '24px' }}>{impressum.vat_id}</p>
            </div>
        </div>
    );
}
