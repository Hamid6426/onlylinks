const ThemeCardCustom = ({
  id,
  bgImage,
  profileBorder,
  borderColor,
  textColor,
  name,
  radioName = "theme",
  selected,
  onSelect,
}) => (
  <div className="text-center theme-switch cursor-pointer" role="button" data-val={id} onClick={() => onSelect(id)}>
    <div
      className="theme-preview bg-cover bg-center"
      style={{ backgroundImage: "linear-gradient" ? bgImage : `url(${bgImage})` }}
    >
      <div className="mt-2">
        <img
          src="https://picsum.photos/id/4/160/90"
          className={`w-[30px] h-[30px] rounded-full border ${profileBorder}`}
        />
        <div className={`text-[7px] mt-2 font-poppins overflow-hidden`} style={{ color: borderColor }}>
          <span className="text">@username</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-[77%] mx-auto mt-4">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i} className={`flex h-6 justify-center rounded-sm bg-white`}>
              <div className="theme-preview-link text-black font-poppins">Link</div>
            </div>
          ))}
      </div>
    </div>
    <div className="section-label theme-title mt-2">{name}</div>
    <div className="form-check">
      <input
        type="radio"
        name={radioName}
        value={id}
        className="form-check-input theme-switch-input"
        checked={selected}
        onChange={() => onSelect(id)}
      />
    </div>
  </div>
);

export default ThemeCardCustom;