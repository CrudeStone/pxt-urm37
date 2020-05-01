enum PingUnit {
  //% block="cm"
  Centimeters,
}

/**
 * Sonar and ping utilities
 */
//% color="#2c3e50" weight=10
namespace sonar {
  /**
   * Send a ping and get the echo time (in microseconds) as a result
   * @param trig tigger pin
   * @param echo echo pin
   * @param unit desired conversion unit
   * @param maxCmDistance maximum distance in centimeters (default is 500)
   */
  //% blockId=sonar_ping block="ping trig %trig|echo %echo|unit %unit"
  export function ping(
    trig: DigitalPin,
    echo: DigitalPin,
    unit: PingUnit,
    maxCmDistance = 500
  ): number {
    // send pulse
    pins.setPull(trig, PinPullMode.PullNone);
    pins.digitalWritePin(trig, 0);
    control.waitMicros(2);
    pins.digitalWritePin(trig, 1);

    // read pulse
    const d = pins.pulseIn(echo, PulseValue.LOW, 50000);

    if (d >= 30000) {
      return 0;
    } else {
      return Math.idiv(d, 50);
    }
  }
}
