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
      ID: event.id,
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
      ID: event.id,
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
}

module.exports = PrintData;
