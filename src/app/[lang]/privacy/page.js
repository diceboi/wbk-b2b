import { getDictionary } from '../../../dictionaries';

export default async function PrivacyPolicyPage({ params: { lang } }) {
    const dict = await getDictionary(lang);
    const legal = dict.legal.privacy;

    return (
        <div className="section section-bg" style={{ minHeight: '80vh' }}>
            <div className="legal-page" style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '60px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <h1 className="section-title" style={{ marginBottom: '8px' }}>{legal.title}</h1>
                <p className="section-tag" style={{ color: '#888', marginBottom: '40px', letterSpacing: 'normal', textTransform: 'none' }}>{legal.updated}</p>

                <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '30px', marginBottom: '16px' }}>{legal.overview}</h2>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '16px' }}>{legal.p1}</p>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '16px' }}>{legal.p2}</p>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '16px' }}>{legal.p3}</p>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '16px' }}>{legal.p4}</p>

                <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '30px', marginBottom: '16px' }}>{legal.controlling}</h2>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '16px' }}>{legal.c1}</p>
                <ul style={{ paddingLeft: '20px', marginBottom: '16px', fontSize: '15px', lineHeight: '1.8', color: '#555' }}>
                    <li style={{ marginBottom: '8px' }}>{legal.c2}</li>
                    <li style={{ marginBottom: '8px' }}>{legal.c3}</li>
                </ul>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '16px' }}>{legal.c4}</p>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '16px' }}>{legal.c5}</p>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '16px' }}>{legal.c6}</p>

                <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '30px', marginBottom: '16px' }}>{legal.what}</h2>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '16px' }}>{legal.w1}</p>
                <ul style={{ paddingLeft: '20px', marginBottom: '16px', fontSize: '15px', lineHeight: '1.8', color: '#555' }}>
                    <li style={{ marginBottom: '8px' }}>{legal.w2}</li>
                    <li style={{ marginBottom: '8px' }}>{legal.w3}</li>
                    <li style={{ marginBottom: '8px' }}>{legal.w4}</li>
                    <li style={{ marginBottom: '8px' }}>{legal.w5}</li>
                </ul>

                <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '30px', marginBottom: '16px' }}>{legal.security}</h2>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '16px' }}>{legal.s1}</p>

                <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '30px', marginBottom: '16px' }}>{legal.links}</h2>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '16px' }}>{legal.l1}</p>

                <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '30px', marginBottom: '16px' }}>{legal.personal}</h2>
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginTop: '20px', marginBottom: '12px' }}>{legal.p_collect}</h3>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '16px' }}>{legal.p_collect_1}</p>
                <ul style={{ paddingLeft: '20px', marginBottom: '16px', fontSize: '15px', lineHeight: '1.8', color: '#555' }}>
                    <li style={{ marginBottom: '8px' }}>{legal.p_collect_2}</li>
                    <li style={{ marginBottom: '8px' }}>{legal.p_collect_3}</li>
                    <li style={{ marginBottom: '8px' }}>{legal.p_collect_4}</li>
                    <li style={{ marginBottom: '8px' }}>{legal.p_collect_5}</li>
                </ul>

                <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '30px', marginBottom: '16px' }}>{legal.cookies}</h2>
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginTop: '20px', marginBottom: '12px' }}>{legal.cookies_h}</h3>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginBottom: '16px' }}>{legal.cookies_1}</p>
            </div>
        </div>
    );
}
