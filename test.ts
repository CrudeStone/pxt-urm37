basic.forever(() => {
    let p = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters);
    led.plotBarGraph(p, 0);
})
