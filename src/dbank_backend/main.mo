import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor Dbank {
  stable var currentValue : Float = 300;
  // currentValue := 300;
  Debug.print(debug_show(currentValue));
  stable var startTime = Time.now();
  // startTime := Time.now();
   let id = 2448289;

  public func topUp(amount: Float) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdrawal(amount: Float){
    let tempValue: Float = currentValue - amount;
    if (tempValue >= 0){
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    }else {
      Debug.print("Withdrawal is too large. currentValue is less than 0.")
    };
  };

  public query func checkBalance(): async Float  {
    return currentValue;
  };

  public func compound() {
    let currentTime = Time.now();
    let timeElapsedES = currentTime - startTime;
    let timeElapsedS = timeElapsedES / 1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));
    startTime := currentTime;
  };
  

  }
