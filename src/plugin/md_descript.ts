import type Token from 'markdown-it/lib/token'

export default {

  // validate: function(params) {
  //   return params.trim().match(/^showcomponent\s+(.*)$/);
  // },

  render: function (tokens: Token[], idx: number) {

    // var m = tokens[idx].info.trim().match(/^show_component\s+(.*)$/);

    if (tokens[idx].nesting === 1) {
		let token = tokens[idx];
		let descript = token.info.trim().slice('descript'.length).trim();
		// console.log('descript', descript);
      // opening tag
      return '<md_descript>\n'+`${descript}\n`;

    } else {
      // closing tag
      return '</md_descript>\n';
    }
  }
};
