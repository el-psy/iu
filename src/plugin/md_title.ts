import type Token from 'markdown-it/lib/token'

export default {

  // validate: function(params) {
  //   return params.trim().match(/^showcomponent\s+(.*)$/);
  // },

  render: function (tokens: Token[], idx: number) {

    // var m = tokens[idx].info.trim().match(/^show_component\s+(.*)$/);

    if (tokens[idx].nesting === 1) {
		let token = tokens[idx];
		let title = token.info.trim().slice('title'.length).trim();
		// console.log('title', title);
      // opening tag
      return '<md_title>\n'+`${title}\n`;

    } else {
      // closing tag
      return '</md_title>\n';
    }
  }
};
