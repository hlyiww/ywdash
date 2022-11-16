// export
import "./_declare/GlobalType";

import compose from "@/compose/src";
import groupBy from "@/groupBy/src";
import keyBy from "@/keyBy/src";
import chunk from "@/chunk/src";
import omit from "@/omit/src";
import pick from "@/pick/src";
import pickBy from "@/pickBy/src";
import difference from "@/difference/src";

// TODO: auto export

const _ = {
  compose,
  groupBy,
  keyBy,
  chunk,
  omit,
  pick,
  pickBy,
  difference,
};

export default _;
