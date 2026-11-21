import React from 'react'
import Card from './components/card'


const App = () => {


const jobOpenings = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=64",
    name: "Google",
    datePosted: "2 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$62/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=64",
    name: "Apple",
    datePosted: "5 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$74/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=64",
    name: "Meta",
    datePosted: "1 week ago",
    post: "React Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$88/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=64",
    name: "Amazon",
    datePosted: "3 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$58/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=64",
    name: "Microsoft",
    datePosted: "10 days ago",
    post: "Cloud Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$82/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=64",
    name: "Netflix",
    datePosted: "2 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=64",
    name: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$91/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=64",
    name: "Adobe",
    datePosted: "3 weeks ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$49/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=uber.com&sz=64",
    name: "Uber",
    datePosted: "4 days ago",
    post: "Backend Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$76/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=openai.com&sz=64",
    name: "OpenAI",
    datePosted: "4 weeks ago",
    post: "AI Infrastructure Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "San Francisco, USA"
  }
];


  return (
    <div className="parent">
      {jobOpenings.map((job,idx) => (
        <div key={idx}>
        <Card
          key={job.name}
          brandLogo={job.brandLogo}
          name={job.name}
          datePosted={job.datePosted}
          post={job.post}
          tag1={job.tag1}
          tag2={job.tag2}
          pay={job.pay}
          location={job.location}
        />
        </div>
      ))}

    </div>
  )
}

export default App
