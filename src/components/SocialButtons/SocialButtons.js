import React from "react";
import { TouchableOpacity, View } from "react-native";
import Svg, { Path, Rect, G, Defs, ClipPath } from "react-native-svg";

const SocialButtons = ({ onFacebookPress, onGooglePress, onApplePress }) => {
  return (
    <View style={{ flexDirection: "row", gap: 8 }}>
      {/* Facebook Login Button */}
      <TouchableOpacity style={styles.socialButton} onPress={onFacebookPress}>
        {/* Facebook Logo */}
        <Svg
          width="105"
          height="56"
          viewBox="0 0 105 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Rect
            x="0.5"
            y="0.5"
            width="104"
            height="55"
            rx="7.5"
            fill="white"
            stroke="#E8ECF4"
          />
          {/* SVG path for Facebook logo */}
          <Path
            d="M51.7956 40.0001V29.0703H55.3496L55.8779 24.791H51.7956V22.0652C51.7956 20.8304 52.1272 19.9849 53.8355 19.9849H56V16.1696C54.9468 16.0525 53.8882 15.996 52.829 16.0003C49.6877 16.0003 47.5308 17.9899 47.5308 21.6425V24.783H44V29.0623H47.5386V40.0001H51.7956Z"
            fill="#4092FF"
          />
        </Svg>
      </TouchableOpacity>

      {/* Google Login Button */}
      <TouchableOpacity style={styles.socialButton} onPress={onGooglePress}>
        {/* Google Logo */}
        <Svg
          width="105"
          height="56"
          viewBox="0 0 105 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Rect
            x="0.5"
            y="0.5"
            width="104"
            height="55"
            rx="7.5"
            fill="white"
            stroke="#E8ECF4"
          />
          <Path
            d="M43.4201 30.4656L42.5974 33.537L39.5903 33.6007C38.6916 31.9338 38.1818 30.0267 38.1818 28C38.1818 26.0403 38.6584 24.1922 39.5032 22.565H39.5039L42.1811 23.0558L43.3538 25.7169C43.1084 26.4325 42.9746 27.2007 42.9746 28C42.9747 28.8676 43.1318 29.6988 43.4201 30.4656Z"
            fill="#FBBB00"
          />
          <Path
            d="M61.6117 25.7922C61.7474 26.5071 61.8182 27.2454 61.8182 28C61.8182 28.8461 61.7292 29.6714 61.5598 30.4675C60.9845 33.1766 59.4812 35.5422 57.3987 37.2162L57.3981 37.2156L54.026 37.0435L53.5488 34.0643C54.9306 33.2539 56.0105 31.9857 56.5793 30.4675H50.2598V25.7922H56.6715H61.6117Z"
            fill="#518EF8"
          />
          <Path
            d="M57.3981 37.2156L57.3987 37.2163C55.3734 38.8442 52.8006 39.8182 50 39.8182C45.4994 39.8182 41.5864 37.3026 39.5903 33.6007L43.4201 30.4656C44.4182 33.1293 46.9877 35.0254 50 35.0254C51.2948 35.0254 52.5078 34.6754 53.5487 34.0643L57.3981 37.2156Z"
            fill="#28B446"
          />
          <Path
            d="M57.5436 18.9026L53.715 22.037C52.6377 21.3636 51.3643 20.9747 50.0001 20.9747C46.9195 20.9747 44.302 22.9578 43.3539 25.7169L39.5039 22.5649H39.5033C41.4702 18.7727 45.4325 16.1818 50.0001 16.1818C52.8676 16.1818 55.4968 17.2033 57.5436 18.9026Z"
            fill="#F14336"
          />
        </Svg>
      </TouchableOpacity>

      {/* Apple Login Button */}
      <TouchableOpacity style={styles.socialButton} onPress={onApplePress}>
        {/* Apple Logo */}
        <Svg
          width="105"
          height="56"
          viewBox="0 0 105 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Rect
            x="0.5"
            y="0.5"
            width="104"
            height="55"
            rx="7.5"
            fill="white"
            stroke="#E8ECF4"
          />
          <G clip-path="url(#clip0_1_25)">
            <Path
              d="M44.6683 40.5133C44.1557 40.1723 43.7014 39.7509 43.3228 39.2653C42.9064 38.7641 42.5206 38.2383 42.1675 37.6907C41.3388 36.4767 40.6889 35.1498 40.2378 33.7509C39.6958 32.1259 39.4334 30.5683 39.4334 29.0449C39.4334 27.3435 39.8015 25.8583 40.5213 24.6103C41.055 23.6348 41.8396 22.8196 42.7939 22.2491C43.7188 21.6747 44.7815 21.3603 45.87 21.3391C46.2511 21.3391 46.6614 21.3944 47.0969 21.5C47.4097 21.5886 47.7908 21.7283 48.2563 21.9022C48.8487 22.1305 49.1745 22.2703 49.285 22.3044C49.6319 22.4311 49.9236 22.4864 50.1527 22.4864C50.3266 22.4864 50.572 22.4311 50.8507 22.3466C51.0075 22.2914 51.3032 22.1939 51.7265 22.0127C52.1458 21.8599 52.4757 21.7291 52.7381 21.6316C53.1403 21.513 53.5295 21.4033 53.8764 21.3481C54.2877 21.2832 54.7051 21.266 55.1203 21.2969C55.8399 21.3439 56.5487 21.4964 57.2239 21.7494C58.3281 22.1939 59.221 22.8878 59.8857 23.8741C59.6047 24.0473 59.3411 24.247 59.0983 24.4705C58.5699 24.939 58.1198 25.4889 57.765 26.0996C57.3013 26.9341 57.0609 27.8741 57.0671 28.8288C57.0842 30.0012 57.3848 31.0339 57.9771 31.9268C58.4126 32.5886 58.9785 33.1545 59.6403 33.59C59.9791 33.8183 60.2708 33.9751 60.5503 34.0808C60.4195 34.487 60.2797 34.8803 60.1148 35.2703C59.7407 36.1448 59.2873 36.9833 58.7603 37.7752C58.2907 38.4569 57.9227 38.9647 57.6432 39.3027C57.2077 39.8186 56.7884 40.2127 56.3651 40.4873C55.8995 40.7961 55.3495 40.961 54.7905 40.961C54.4119 40.9755 54.0334 40.9297 53.6692 40.8253C53.3564 40.7197 53.0468 40.6051 52.7422 40.4743C52.4254 40.3288 52.0988 40.2058 51.7647 40.1063C50.939 39.8942 50.0732 39.8928 49.2468 40.1022C48.908 40.1997 48.5822 40.3134 48.2604 40.4532C47.8078 40.6433 47.5072 40.7709 47.3333 40.8253C46.9864 40.9269 46.6265 40.9903 46.2625 41.0114C45.6994 41.0114 45.1745 40.8505 44.6545 40.5247L44.6683 40.5133ZM52.0946 20.5136C51.3585 20.8817 50.6557 21.0385 49.9577 20.9873C49.848 20.2845 49.9577 19.5654 50.2494 18.7781C50.4977 18.1111 50.8647 17.4945 51.3325 16.9581C51.8265 16.3935 52.4259 15.9306 53.0972 15.5956C53.8122 15.2275 54.4939 15.0284 55.1455 14.9992C55.23 15.7353 55.1455 16.4593 54.875 17.2417C54.6246 17.9334 54.2583 18.5774 53.7919 19.1462C53.3158 19.7116 52.7316 20.1763 52.0735 20.5128L52.0946 20.5136Z"
              fill="black"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_1_25">
              <Rect
                width="26"
                height="26"
                fill="white"
                transform="translate(37 15)"
              />
            </ClipPath>
          </Defs>
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  socialButton: {
    // Ваши стили для кнопок
  },
};

export default SocialButtons;
