import React from 'react';
import './styles.css';
import TeamCard from '../../components/TeamCard';

const teams = [
    {
        city: 'Los Angeles',
        name: 'Lakers',
        stadium: 'Staples Center',
        year: '1947',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png'
    },

    {
        city: 'Cleveland',
        name: 'Cavaliers',
        stadium: 'Quicken Loans Arenar',
        year: '1970',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Cleveland_Cavaliers_secondary_logo.svg/1200px-Cleveland_Cavaliers_secondary_logo.svg.png'
    },

    {
        city: 'Golden State',
        name: 'Warriors',
        stadium: 'Chase Center',
        year: '1956',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png'
    },

    {
        city: 'Boston',
        name: 'Celtics',
        stadium: 'TD Garden',
        year: '1946',
        image: 'https://upload.wikimedia.org/wikipedia/pt/f/f5/Boston_Celtics.png'
    },

    {
        city: 'Philadelphia',
        name: '76ers',
        stadium: 'Wells Fargo Center',
        year: '1939',
        image: 'https://upload.wikimedia.org/wikipedia/pt/e/e3/Philadelphia_76ers.png'
    },

    {
        city: 'New York',
        name: 'Knicks',
        stadium: 'Madison Square Garden',
        year: '1946',
        image: 'https://upload.wikimedia.org/wikipedia/pt/d/d8/NewYorkKnicks.PNG'
    },

    {
        city: 'Toronto',
        name: 'Raptors',
        stadium: 'Air Canada Centre',
        year: '1967',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/800px-Toronto_Raptors_logo.svg.png'
    },

    {
        city: 'Chicago',
        name: 'Bulls',
        stadium: 'United Center',
        year: '1966',
        image: 'https://upload.wikimedia.org/wikipedia/pt/b/be/Chicago_Bulls.png'
    },

    {
        city: 'Detroit',
        name: ' Pistons',
        stadium: 'Little Caesars Arena',
        year: '1941',
        image: 'https://upload.wikimedia.org/wikipedia/pt/f/f2/Detroit_Pistons.png'
    },

    {
        city: 'Indiana',
        name: 'Pacers',
        stadium: 'Bankers Life Fieldhouse',
        year: '1967',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/1200px-Indiana_Pacers.svg.png'
    },

    {
        city: 'Milwaukee',
        name: 'Bucks',
        stadium: 'Bradley Center',
        year: '1968',
        image: 'https://upload.wikimedia.org/wikipedia/pt/9/9a/Milwaukee_Bucks_logo15.png'
    },

    {
        city: 'Charlotte',
        name: ' Hornets',
        stadium: 'Spectrum Center',
        year: '1988',
        image: 'https://upload.wikimedia.org/wikipedia/pt/f/f6/Charlotte_Hornets.png'
    },

    {
        city: 'Atlanta',
        name: 'Hawks',
        stadium: 'Philips Arena',
        year: '1946',
        image: 'https://upload.wikimedia.org/wikipedia/pt/9/9a/Atlanta_Hawks.png'
    },

    {
        city: 'Miami',
        name: 'Heat',
        stadium: 'AmericanAirlines Arena',
        year: '1988',
        image: 'https://upload.wikimedia.org/wikipedia/pt/8/85/Miami_Heat.png'
    },

    {
        city: 'Orlando',
        name: 'Magic',
        stadium: 'Amway Center',
        year: '1989',
        image: 'https://upload.wikimedia.org/wikipedia/pt/2/24/Orlando_Magic.png'
    },

    {
        city: 'Washington',
        name: ' Wizards',
        stadium: 'Amway Center',
        year: '1961',
        image: 'https://upload.wikimedia.org/wikipedia/pt/5/5b/Washington_Wizards.png'
    },

    {
        city: 'Denver',
        name: 'Nuggets',
        stadium: 'Pepsi Center',
        year: '1967',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Denver_Nuggets.svg/1200px-Denver_Nuggets.svg.png'
    },

    {
        city: 'Minnesota',
        name: ' Timberwolves',
        stadium: 'Target Center',
        year: '1989',
        image: 'https://upload.wikimedia.org/wikipedia/pt/4/44/Minnesota_Timberwolves.png'
    },

    {
        city: 'Oklahoma City ',
        name: 'Thunder',
        stadium: 'Chesapeake Energy Arena',
        year: '1967',
        image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Oklahoma_City_Thunder.svg/1200px-Oklahoma_City_Thunder.svg.png'
    },

    {
        city: 'Portland Trail',
        name: 'Blazers',
        stadium: 'Moda Center',
        year: '1970',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png'
    },

    {
        city: 'Utah',
        name: 'Jazz',
        stadium: 'Vivint Smart Home Arena',
        year: '1974',
        image: 'https://upload.wikimedia.org/wikipedia/pt/a/ad/Utah_Jazz.png'
    },

    {
        city: 'Los Angeles',
        name: 'Clippers',
        stadium: 'Staples Center',
        year: '1970',
        image: 'https://upload.wikimedia.org/wikipedia/pt/6/67/Los_Angeles_Clippers.png'
    },

    {
        city: 'Phoenix',
        name: 'Suns',
        stadium: 'Talking Stick Resort Arena',
        year: '1968',
        image: 'https://upload.wikimedia.org/wikipedia/pt/f/f9/Phoenix_Suns.png'
    },

    {
        city: 'Sacramento',
        name: 'Kings',
        stadium: 'Golden 1 Center',
        year: '1948',
        image: 'https://upload.wikimedia.org/wikipedia/pt/c/c7/Sacramento_Kings.png'
    },

    {
        city: 'Dallas',
        name: 'Mavericks',
        stadium: 'American Airlines Center',
        year: '1980',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/1200px-Dallas_Mavericks_logo.svg.png'
    },

    {
        city: 'Houston',
        name: 'Rockets',
        stadium: 'Toyota Center',
        year: '1967',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/1200px-Houston_Rockets.svg.png'
    },

    {
        city: 'New Orleans ',
        name: 'Pelicans',
        stadium: 'Smoothie King Center',
        year: '2002',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/New_Orleans_Pelicans_logo.svg/1200px-New_Orleans_Pelicans_logo.svg.png'
    },

    {
        city: 'Memphis',
        name: 'Grizzlies',
        stadium: 'FedExForum',
        year: '1995',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/1200px-Memphis_Grizzlies.svg.png'
    },

    {
        city: 'San Antonio',
        name: 'Spurs',
        stadium: 'AT&T Center',
        year: '1967',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/1200px-San_Antonio_Spurs.svg.png'
    },

    {
        city: 'Brooklyn ',
        name: 'Nets',
        stadium: 'Barclays Center',
        year: '1967',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg'
    },
]

const URL_LOGO = "https://vignette.wikia.nocookie.net/logopedia/images/4/4c/NBA_Horizontal_Logo_.svg/revision/latest?cb=20160207144301";

export default function Home() {
    return (
        <div className="home-teams">
            <header>
                <img src={URL_LOGO} alt="nba-logo" />
            </header>
            <div className="page-teams">
                {teams.map(team =>
                    <TeamCard team={team} />
                )}
            </div>
        </div >
    );
}