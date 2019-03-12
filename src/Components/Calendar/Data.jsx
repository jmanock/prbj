export default{
  getEvents:() =>{
    const eventMeta = [
      {start:'2019-03-16', end:'2019-03-16', title:'Adoption Event', link:'', description:'Adopters will receive a coupon for either a free Self-service Dog Wash OR $5 off a Full-service Groom', time:'12:00pm - 4:00pm',where:'Pet Supplies Plus 4270 Aloma Ave, Winter Park, FL 32792'},
      {start:'2019-03-23', end:'2019-03-23', title:'8th Annual Sanford Pints N` Paws', link:'www.pintsandpaws.com', description:'', time:'2:00pm - 6:00pm', where:'Downtown Sanford' },
      {start:'2019-04-07', end:'2019-04-07', title:"Seminole High School's Animal Spring Wag-N-Wash", link:'', description:'All Bathes include a full serve bath and blow dry', time:'11:00am - 3:00pm', where:'Paw Park Place, 315 D. French Avenue Sanford'},
      {start:'2019-03-17', end:'2019-03-17', title:'Yappy Hour Adopt-A-Dog', link:'', description:'Organic dog treats for donations, $5 drink menu, $5 featured liquors', where:'1427 N. Orange Ave. Orlando, FL 32804', time:'1:00pm - 4:00pm'}
    ];
    const events = eventMeta.map((data) =>{
      return{
        start:data.start,
        end:data.end,
        eventClasses:'custom-event-class',
        title:data.title,
        description:data.description,
        link:data.link,
        where:data.where,
        time:data.time
      }
    });
    return events;
  }
}
