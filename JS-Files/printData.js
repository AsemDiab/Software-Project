class PrintData {
  printUserData(data) {
    const obj = Object.fromEntries(data);

    const formattedData = Object.values(obj).map((event) => ({
      Name: event.username,
      Email: event.email,
      Password: event.password,
      Type: event.type,
    }));
    console.table(formattedData);
  }

  printVenueData(data) {
    const obj = Object.fromEntries(data);

    const formattedData = Object.values(obj).map((event) => ({
      ID: event.venue_id,
      Name: event.name,
      Location: event.location,
      Capcity: event.capcity,
      Price: event.price,
      Amenities: event.Amenities,
      Url: event.url,
    }));
    console.table(formattedData);
  }

  printEventData(data) {
    const obj = Object.fromEntries(data);

    const formattedData = Object.values(obj).map((event) => ({
      ID: event.event_id,
      Name: event.name,
      Date: event.date,
      Time: event.time,
      "Venue ID": event.venueId,
      Theme: event.theme,
      Description: event.Description,
      Count: event.Count,
      Type: event.type,
    }));
    console.table(formattedData);
  }

  printReservationData(data) {
    const obj = Object.fromEntries(data);

    const formattedData = Object.values(obj).map((event) => ({
      Rev_Id: event.rev_Id,
      Email: event.email,
      ID: event.id,
      StartTime: event.startTime,
      EndTime: event.endTime,
      StartDate: event.startDate,
      EndDate: event.endDate,
    }));
    console.table(formattedData);
  }

  printBussinessAccountData(data) {
    const obj = Object.fromEntries(data);

    const formattedData = Object.values(obj).map((event) => ({
      Email: event.email,
      PageNumber: event.PageName,
      PhoneNumber: event.PhoneNumber,
      BussinessType: event.BussinessType,
    }));
    console.table(formattedData);
  }

  printMergedTable(data) {
    const obj = Object.fromEntries(data);

    const formattedData = Object.values(obj).map((event) => ({
      Name: event.name,
      Date: event.date,
      Time: event.time,
      Location: event.location,
      Price: event.price,
    }));
    console.table(formattedData);
  }

  // printBudgetExpenses(data1, data2, data3) {
  //   // const mergedMap = new Map([...data1, ...data2, ...data3]);
  //   const mergedMap = new Map([...data1, ...data2]);
  //   console.log(mergedMap);

  //   const obj = Object.fromEntries(mergedMap);

  //   const formattedData = Object.values(obj).map((event) => ({
  //     Event_ID: event.event_id,
  //     Event_Name: event.name,
  //     Price: event.price,
  //     PhoneNumber: event.PhoneNumber,
  //     BussinessType: event.BussinessType,
  //   }));
  //   console.table(formattedData);
  // }

  mergeData(venueId, venueObj, eventObj) {
    let venueDetails;
    let eventsAtVenue;
    let newObj = new Map;
    venueObj.forEach((venueValue, key) => {
      console.log(venueValue.venue_id);
      let venue_ID = venueValue.venue_id;
      if (venue_ID == venueId) {
        console.log("-------->" + venueId);
        venueDetails = venueValue;
        console.log(venueDetails);
        eventObj.forEach((eventValue, key) => {
          if (venue_ID == eventValue.venueId) {
            eventsAtVenue = eventValue;
            
            // newObj.name = eventValue.name;
            // newObj.date = eventValue.date;
            // newObj.time = eventValue.time;
            // newObj.location = venueValue.location;
            // newObj.price = venueValue.price;
          }
        });
        newObj = {
          "name" : eventsAtVenue.name,
          "date" : eventsAtVenue.date,
          "time" : eventsAtVenue.time,
          "location" : venueDetails.location,
          "price" : venueDetails.price,
        }
      } else {
        console.log("Venue Doesn't Exist");
      }
    });

    // console.log(venueDetails);
    if (!venueDetails) {
      console.error("Venue ID not found.");
      return;
    }
    return newObj;
  }
}

module.exports = PrintData;
