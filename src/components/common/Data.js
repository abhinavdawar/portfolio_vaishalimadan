import { FiZap } from 'react-icons/fi';
import { PiDevicesBold } from 'react-icons/pi';
import { GrStatusGood } from 'react-icons/gr';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import project1 from '../../assests/project1.png';
import project3 from '../../assests/project3.png';
import project4 from '../../assests/project4.png';

export const aboutInfoA = [
	{
		name: 'BirthDate:',
		value: '21.10.1994',
	},
	{
		name: 'Address:',
		value: 'Sector 15, Gurugram, India',
	},
	{
		name: 'Email:',
		value: 'vaishali.madaan18@gmail.com',
	},
];
export const aboutInfoB = [
	{
		name: 'Study:',
		value: 'NMIMS, Maharashtra',
	},
	{
		name: 'Hobbies:',
		value: 'Reading and Listening Songs',
	},
	{
		name: 'Mobile:',
		value: '+91 9210094092',
	},
];

export const featuresArray = [
	{
		icon: <FiZap />,
		title: 'Fast',
		description:
			'Fast load times and lag free interaction, my highest priority.I give importance to the impact of design and develop accordingly.',
	},
	{
		icon: <PiDevicesBold />,
		title: 'Responsive',
		description:
			'Resposive web designes which will work smoothly on every screen be it small, medium or large.',
	},
	{
		icon: <GrStatusGood />,
		title: 'Easy',
		description:
			'Developed designs and UI is very easy to understand and you can navigate through all the features easily without any issue.',
	},
	{
		icon: <HiOutlineRocketLaunch />,
		title: 'Optimized',
		description:
			'optimized for different devices, browsers, data speed, search  engines, and users.',
	},
];

export const skillArrayA = [
	{
		label: 'Figma',
		percentage: '90%',
	},
	{
		label: 'Adobe Photoshop',
		percentage: '85%',
	},
	{
		label: 'Adobe Illustrator',
		percentage: '85%',
	},
	{
		label: 'Wireframing',
		percentage: '80%',
	},
];
export const skillArrayB = [
	{
		label: 'Prototyping',
		percentage: '90%',
	},
	{
		label: 'Responsive Design',
		percentage: '90%',
	},
	{
		label: 'Microsoft Office Suite',
		percentage: '80%',
	},
	{
		label: 'Canva',
		percentage: '90%',
	},
];

export const educationArray = [
	{
		period: '2025',
		instituteName: 'UpGrad',
		education: 'UI/UX Design Bootcamp',
	},
	{
		period: '2019-2021',
		instituteName: 'NMIMS, Maharashtra',
		education: 'PGBDM in International Trade Management',
	},
	{
		period: '2012–2015',
		instituteName: 'NIIFT, Mohali',
		education: 'BSc. Fashion Technology',
	},
];

export const experienceArray = [
	{
		period: '2022-Present',
		company: 'Shree Balaji Knits',
		designation: 'UX Designer',
	},
	{
		period: '2021-2022',
		company: 'Balance Fitness Lounge',
		designation: 'Graphic Designer & Social Media Handler',
	},
	{
		period: '2016-2021',
		company: 'Proex Fashion Pvt. Ltd.',
		designation: 'Senior Designer & Merchandise Planner',
	},
];

export const projectsArray = [
	{
		id: '01',
		name: 'Prime File Advisors',
		description:
			'Designing and Developed a web app using React Streamlining Acquisition of all necessary financial documents, One stop solution for immigration agencies and Comprehensive Business Support.',
		link: 'https://primefileadvisors.com/',
		image: project1,
	},
	{
		id: '02',
		name: 'Web Magic- Freelancer template',
		description:
			'Developed a template using front end technologies to help businesses to enhance their productivity and grow using website and explore the power of internet. ',
		link: 'https://webmagic.netlify.app/',
		image: project3,
	},
	{
		id: '03',
		name: "Let's Get It Done",
		description:
			'Created a stylish, easy to navigate and use to do list using web develoment using which you can prioritize your work and personal tasks.',
		link: 'https://letsgetitdone.netlify.app/',
		image: project4,
	},
];
