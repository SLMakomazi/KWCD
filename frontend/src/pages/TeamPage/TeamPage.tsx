
import './TeamPage.css';

const TeamPage = () => {
  const boardMembers = [
    {
      id: 1,
      name: 'Sweetness Nomfusi Vos',
      position: 'Chairperson',
      image: '/images/team/member1.jpg',
      email: 'sweetness@kwcd.org.za',
      description: 'Sweetness leads our board with extensive experience in community development and strategic planning. She brings vision and leadership to guide KWCD\'s mission of empowering women and children in Kayamandi.'
    },
    {
      id: 2,
      name: 'Zimasa Faku',
      position: 'Deputy Chairperson',
      image: '/images/team/member2.jpg',
      email: 'zimasa@kwcd.org.za',
      description: 'Zimasa supports the chairperson in governance and strategic decision-making. Her expertise in community engagement and program development helps shape our organization\'s direction.'
    },
    {
      id: 3,
      name: 'Luzuko Sizila',
      position: 'Secretary',
      image: '/images/team/member3.jpg',
      email: 'luzuko@kwcd.org.za',
      description: 'Luzuko manages our administrative operations and ensures proper documentation and communication within the organization and with our stakeholders.'
    },
    {
      id: 4,
      name: 'Mahlubi Nkonzo',
      position: 'Board Member',
      image: '/images/team/member4.jpg',
      email: 'mahlubi@kwcd.org.za',
      description: 'Mahlubi contributes valuable insights and oversight to our programs, ensuring they align with our mission and meet community needs effectively.'
    },
    {
      id: 5,
      name: 'Onezwa Siko',
      position: 'Treasurer',
      image: '/images/team/member5.jpg',
      email: 'onezwa@kwcd.org.za',
      description: 'Onezwa oversees our financial management, ensuring transparency, accountability, and sustainable resource allocation for all our community programs.'
    },
    {
      id: 6,
      name: 'Busisiwe Ndlhlovu',
      position: 'Board Member',
      image: '/images/team/member6.jpg',
      email: 'busisiwe@kwcd.org.za',
      description: 'Busisiwe brings diverse perspectives and community insights to our board, helping us better understand and serve the Kayamandi community.'
    }
  ];

  const operationalStaff = [
    {
      id: 1,
      name: 'Zimkitha',
      position: 'Project Centre',
      image: '/images/team/operational1.jpg',
      email: 'zimkitha@kwcd.org.za',
      description: 'Our dedicated project centre team manages day-to-day operations and coordinates various community initiatives.'
    },
    {
      id: 2,
      name: 'Lelethu Nelisiwe Jodwana',
      position: 'Program Officer',
      image: '/images/team/operational2.jpg',
      email: 'lelethu@kwcd.org.za',
      description: 'Lelethu coordinates and oversees our educational and community development programs, ensuring they run smoothly and effectively.'
    }
  ];

  const volunteers = [
    {
      id: 1,
      name: 'Community Volunteer 1',
      position: 'Volunteer',
      image: '/images/volunteers/volunteer1.jpg',
      email: 'volunteer1@kwcd.org.za',
      description: 'Dedicated community member supporting various programs and initiatives.'
    },
    {
      id: 2,
      name: 'Community Volunteer 2',
      position: 'Volunteer',
      image: '/images/volunteers/volunteer2.jpg',
      email: 'volunteer2@kwcd.org.za',
      description: 'Passionate volunteer contributing time and skills to community development.'
    }
  ];

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="container">
          <h1>Our Team</h1>
          <p>Meet the dedicated individuals working to make a difference in the Kayamandi community</p>
        </div>
      </section>

      {/* Business Owner Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Business Owner</h2>
            <p>The visionary behind our organization</p>
          </div>
          
          <div className="business-owner-card">
            <div className="owner-image">
              <img src="/images/team/owner.jpg" alt="Gladys Bakubaku" />
              <a href="mailto:gladys@kwcd.org.za" className="email-link" title="Email Gladys Bakubaku">
                <i className="fas fa-envelope"></i>
                <span>Email</span>
              </a>
            </div>
            <div className="owner-info">
              <h3>Gladys Bakubaku</h3>
              <span className="position">Business Owner</span>
              <p>Gladys Bakubaku is the visionary founder and business owner of KWCD. Her passion for community development and commitment to empowering women and children in Kayamandi drives our organization's mission and values.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="team-section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Board Members</h2>
            <p>Our governance and strategic leadership team</p>
          </div>
          
          <div className="team-grid">
            {boardMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="position">{member.position}</span>
                  <p>{member.description}</p>
                  <div className="member-email">
                    <i className="fas fa-envelope"></i>
                    <a href={`mailto:${member.email}`} className="email-address">
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Staff Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Operational Staff</h2>
            <p>Our dedicated team managing day-to-day operations</p>
          </div>
          
          <div className="team-grid">
            {operationalStaff.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="position">{member.position}</span>
                  <p>{member.description}</p>
                  <div className="member-email">
                    <i className="fas fa-envelope"></i>
                    <a href={`mailto:${member.email}`} className="email-address">
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="team-section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Our Volunteers</h2>
            <p>The heart and soul of our organization</p>
          </div>
          
          <div className="volunteers-grid">
            {volunteers.map((volunteer) => (
              <div key={volunteer.id} className="volunteer-card">
                <div className="volunteer-image">
                  <img src={volunteer.image} alt={volunteer.name} />
                  <a href={`mailto:${volunteer.email}`} className="email-link" title={`Email ${volunteer.name}`}>
                    <i className="fas fa-envelope"></i>
                    <span>Email</span>
                  </a>
                </div>
                <div className="volunteer-info">
                  <h3>{volunteer.name}</h3>
                  <span className="role">{volunteer.position}</span>
                  <p>{volunteer.description}</p>
                  <div className="member-email">
                    <i className="fas fa-envelope"></i>
                    <a href={`mailto:${volunteer.email}`} className="email-address">
                      {volunteer.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cta-section text-center">
            <h3>Join Our Team</h3>
            <p>Become a volunteer and make a difference in the Kayamandi community</p>
            <a href="/volunteer" className="btn btn-primary">Volunteer With Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
