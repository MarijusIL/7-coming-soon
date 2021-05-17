function calcDeadline(targetDate) {
  const clock = new Date();
  const currentYear = clock.getFullYear();
  const now = Date.now();

  let fullTargetDate = `${currentYear}-${targetDate}`;
  let targetClock = new Date(fullTargetDate);
  let timeInMiliseconds = targetClock.getTime();

  if (timeInMiliseconds < now) {
    fullTargetDate = `${currentYear + 1}-${targetDate}`;
    targetClock = new Date(fullTargetDate);
    timeInMiliseconds = targetClock.getTime();
  }

  const timeLeftInMiliseconds = timeInMiliseconds - now;
  let timeLeftInSeconds = Math.round(timeLeftInMiliseconds / 1000);

  const days = Math.floor(timeLeftInSeconds / 60 / 60 / 24);
  timeLeftInSeconds -= days * 60 * 60 * 24;

  const hours = Math.floor(timeLeftInSeconds / 60 / 60);
  timeLeftInSeconds -= hours * 60 * 60;

  const minutes = Math.floor(timeLeftInSeconds / 60);
  timeLeftInSeconds -= minutes * 60;

  return [days, hours, minutes, timeLeftInSeconds];
}

export { calcDeadline };
