const SvgButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg width="100" height="40">
        <Path
          d="M51.7956 40.0001V29.0703H55.3496L55.8779 24.791H51.7956V22.0652C51.7956 20.8304 52.1272 19.9849 53.8355 19.9849H56V16.1696C54.9468 16.0525 53.8882 15.996 52.829 16.0003C49.6877 16.0003 47.5308 17.9899 47.5308 21.6425V24.783H44V29.0623H47.5386V40.0001H51.7956Z"
          fill="#4092FF"
        />
      </Svg>
    </TouchableOpacity>
  );
};
